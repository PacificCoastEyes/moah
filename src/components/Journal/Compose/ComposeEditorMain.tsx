import ReactQuill, { UnprivilegedEditor } from "react-quill";
import { Sources, DeltaStatic } from "quill";
import { Box } from "@mui/material";

import "react-quill/dist/quill.snow.css";
import "../../../styles/components/ComposeEditor.css";

const ComposeEditorMain = ({
    value,
    handleChange,
}: {
    value: string;
    handleChange: (
        value: string,
        delta: DeltaStatic,
        sources: Sources,
        editor: UnprivilegedEditor
    ) => void;
}) => {
    return (
        <Box
            height="100%"
            marginTop={3}
            sx={{
                backgroundColor: "white",
                "& p": { color: "black", fontSize: "1.25em" },
                "& .ql-toolbar.ql-snow, .ql-container.ql-snow": {
                    borderColor: theme => theme.palette.primary.main,
                },
                "& .ql-toolbar": {
                    borderRadius: "10px 10px 0 0",
                },
                "& .ql-container": {
                    borderRadius: "0 0 10px 10px",
                },
            }}
        >
            <ReactQuill
                value={value}
                onChange={handleChange}
                theme="snow"
                style={{
                    height: "calc(100% - 42.5px)",
                }}
            />
        </Box>
    );
};

export default ComposeEditorMain;
