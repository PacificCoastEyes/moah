import { Dispatch, SetStateAction } from "react";
import ArchiveListHeader from "./ArchiveListHeader";
import ArchiveListMain from "./ArchiveListMain";
import { Stack } from "@mui/material";
import { IJournalEntry } from "../../../models/IJournalEntry";

const ArchiveListContainer = ({
    entryList,
    setEntryList,
}: {
    entryList: IJournalEntry[];
    setEntryList: Dispatch<SetStateAction<IJournalEntry[]>>;
}) => {
    return (
        <Stack width="100%" height="100%" marginY={3}>
            <ArchiveListHeader entryCount={entryList.length} />
            <ArchiveListMain
                entryList={entryList}
                setEntryList={setEntryList}
            />
        </Stack>
    );
};

export default ArchiveListContainer;
