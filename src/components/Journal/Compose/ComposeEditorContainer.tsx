import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
} from "react";
import axios from "../../../utils/AxiosInstance";
import { AxiosError } from "axios";
import ComposeEditorHeader from "./ComposeEditorHeader";
import ComposeEditorMain from "./ComposeEditorMain";
import { Stack } from "@mui/material";

import { IJournalEntry } from "../../../models/IJournalEntry";

import { Sources, DeltaStatic } from "quill";
import { UnprivilegedEditor } from "react-quill";

const ComposeEditorContainer = ({
    entryData,
    setEntryData,
}: {
    entryData: IJournalEntry;
    setEntryData: Dispatch<SetStateAction<IJournalEntry>>;
}) => {
    const [isAutoSaving, setIsAutoSaving] = useState<boolean>(false);
    const [showAutoSaveAlert, setShowAutoSaveAlert] = useState<boolean>(false);
    const [autoSaveAlertMessage, setAutoSaveAlertMessage] =
        useState<string>("");

    const handleChange = (
        value: string,
        delta: DeltaStatic,
        sources: Sources,
        editor: UnprivilegedEditor
    ) => {
        setIsAutoSaving(true);
        setEntryData(prevState => {
            const content = editor.getHTML();
            const snippet = editor.getText(0, 140).trim();
            return { ...prevState!, content, snippet };
        });
    };

    const autoSave = useCallback(async () => {
        setShowAutoSaveAlert(false);
        setAutoSaveAlertMessage("");
        try {
            const updatedEntry = JSON.parse(JSON.stringify(entryData));
            delete updatedEntry.created_at;
            await axios.patch("/Journal/save-entry", updatedEntry, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "authToken"
                    )}`,
                },
            });
        } catch (err) {
            console.error(err);
            setAutoSaveAlertMessage(
                err instanceof AxiosError && err.response
                    ? err.response.data.length
                        ? err.response.data
                        : "Oops! There was a problem saving your changes."
                    : "Oops! There was a problem saving your changes. Are you offline?"
            );
            setShowAutoSaveAlert(true);
        } finally {
            setIsAutoSaving(false);
        }
    }, [entryData]);

    /*
    The reason this useEffect works elegantly as a debouncer instead of a traditional debounce function is because the useEffect fires whenever entryData changes (i.e. whenver the user writes in or edits the content of their journal entry.). As soon as it fires, the timeout is created and the 5 second countdown begins. If the user makes any further changes in this 5-second countdown period, the entryData state changes, triggering a re-rendering of the ComposeEditorContainer component, which in turn forces the useEffect to run the function it returns while the component unmounts for remounting, thereby clearing the existing timeout.
    */
    useEffect(() => {
        const timeout = setTimeout(autoSave, 5000);
        return () => clearTimeout(timeout);
    }, [entryData, autoSave]);

    return (
        <Stack width="100%" height="100%" marginY={3}>
            <ComposeEditorHeader
                entryData={entryData}
                isAutoSaving={isAutoSaving}
                showAutoSaveAlert={showAutoSaveAlert}
                autoSaveAlertMessage={autoSaveAlertMessage}
            />
            <ComposeEditorMain
                value={entryData.content}
                handleChange={handleChange}
            />
        </Stack>
    );
};

export default ComposeEditorContainer;
