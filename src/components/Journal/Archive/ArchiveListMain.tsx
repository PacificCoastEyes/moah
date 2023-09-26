import { Dispatch, SetStateAction, useState } from "react";
import axios from "../../../utils/AxiosInstance";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import {
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Alert,
    CircularProgress,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import "../../../styles/components/ArchiveListMain.css";
import { IJournalEntry } from "../../../models/IJournalEntry";

const ArchiveListMain = ({
    entryList,
    setEntryList,
}: {
    entryList: IJournalEntry[];
    setEntryList: Dispatch<SetStateAction<IJournalEntry[]>>;
}) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
    const [entryToDelete, setEntryToDelete] = useState<string>("");
    const [isDeletingEntry, setIsDeletingEntry] = useState<boolean>(false);

    const navigate = useNavigate();

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
        setEntryToDelete("");
    };

    const deleteEntry = async () => {
        setIsDeletingEntry(true);
        try {
            await axios.delete(
                `/Journal/delete-entry-by-id?id=${entryToDelete}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "authToken"
                        )}`,
                    },
                }
            );
            setEntryList(prevState =>
                prevState.filter(entry => entry.id !== entryToDelete)
            );
            closeDeleteDialog();
        } catch (err) {
            console.error(err);
            alert(
                err instanceof AxiosError && err.response
                    ? err.response.data.length
                        ? err.response.data
                        : "Oops! There was a problem deleting your journal entry."
                    : "Oops! There was a problem deleting your journal entry. Are you offline?"
            );
        } finally {
            setIsDeletingEntry(false);
        }
    };

    return (
        <>
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table
                    size="small"
                    sx={{
                        "& .MuiTableRow-root:hover": {
                            backgroundColor: "secondary.light",
                        },
                    }}
                >
                    <TableBody>
                        {entryList.map(entry => (
                            <TableRow
                                key={entry.id}
                                sx={{
                                    "& :hover": {
                                        cursor: "pointer",
                                    },
                                }}
                            >
                                <TableCell
                                    width="30%"
                                    onClick={() =>
                                        navigate(
                                            `/journal/compose?id=${entry.id}`
                                        )
                                    }
                                >
                                    <Typography variant="body1">
                                        {new Date(
                                            entry.created_at
                                        ).toLocaleString()}
                                    </Typography>
                                </TableCell>
                                <TableCell
                                    width="65%"
                                    sx={{ maxWidth: 0 }}
                                    onClick={() =>
                                        navigate(
                                            `/journal/compose?id=${entry.id}`
                                        )
                                    }
                                >
                                    <Typography
                                        variant="body1"
                                        noWrap
                                        overflow="hidden"
                                        textOverflow="ellipsis"
                                    >
                                        {entry.snippet}
                                    </Typography>
                                </TableCell>
                                <TableCell width="5%">
                                    <IconButton
                                        onClick={() => {
                                            setEntryToDelete(entry.id);
                                            setShowDeleteDialog(true);
                                        }}
                                        className="btn-delete-entry"
                                    >
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={showDeleteDialog} onClose={closeDeleteDialog}>
                <DialogTitle>
                    Are you sure you want to delete this journal entry?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Alert severity="error">
                            This action is permanent and cannot be undone.
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={closeDeleteDialog}
                        disabled={isDeletingEntry}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={deleteEntry}
                        disabled={isDeletingEntry}
                        sx={{ width: "83.5px" }}
                    >
                        {isDeletingEntry ? (
                            <CircularProgress size={25} />
                        ) : (
                            "Delete"
                        )}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ArchiveListMain;
