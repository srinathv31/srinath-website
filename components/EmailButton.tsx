import { Button } from "@mui/material";
import { MdEmail } from "react-icons/md";

export default function EmailButton(): JSX.Element {
    return(
        <Button
            variant="contained"
            title="Email"
            onClick={(e) => {
                window.location.href = "mailto:srinath@srinathvenkatesh.com";
                e.preventDefault();
            }}
            startIcon={<MdEmail />}
            size="large"
        >
            Contact Me
        </Button>
    );
}
