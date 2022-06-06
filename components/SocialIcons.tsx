import Link from "next/link";
import styles from "../styles/Social.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { useState } from "react";
import { Modal, Box, Typography, TextField } from "@mui/material";

export default function SocialIcons(): JSX.Element {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>("");

    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
      
    return(
        <div className={styles.socialMenu}>
            <ul>
                <li>
                    <MdEmail onClick={() => setModalOpen(true)}><a className={styles.menuLink}></a></MdEmail>
                </li>
                <li>
                    <FaLinkedin><a className={styles.menuLink}></a></FaLinkedin>
                </li>
                <li>
                    <FaGithub ></FaGithub>
                </li>
                <li >
                    <SiFiverr><a className={styles.fiverr}></a></SiFiverr>
                </li>
            </ul>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        value={name}
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Uncontrolled"
                        defaultValue="foo"
                    />
                </Box>
            </Modal>
        </div>
    );
}
