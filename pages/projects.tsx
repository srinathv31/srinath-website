// Source Imports
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import styles from "../styles/Home.module.css";

const images = [
    {
        url: "https://i.imgur.com/BkIeqWm.png",
        title: "Vital - iOS and Android App",
        width: "30%",
    },
    {
        url: "https://i.imgur.com/a4f9ORb.png",
        title: "University Degree Planner",
        width: "30%",
    },
    {
        url: "https://i.imgur.com/mkxvGv4.png",
        title: "NBA Team Wins x Vitamin D Correlation Analysis Tool",
        width: "30%",
    },
    {
        url: "https://i.imgur.com/9V25rLf.jpg",
        title: "NBA Role Player Draft Analysis Tool",
        width: "30%",
    },
    {
        url: "https://i.imgur.com/jbbx8tZ.png",
        title: "Pokemon made with React",
        width: "30%",
    },
    {
        url: "https://i.imgur.com/Pv2P5wY.png",
        title: "NBA Data API",
        width: "30%",
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    margin: 20,
    [theme.breakpoints.down("sm")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
        zIndex: 1,
        "& .MuiImageBackdrop-root": {
            opacity: 0.25,
        },
        "& .MuiImageMarked-root": {
            opacity: 0,
        },
        "& .MuiTypography-root": {
            border: "4px solid currentColor",
        },
    },
}));

const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    borderRadius: 10
});

const ProjImage = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.55,
    transition: theme.transitions.create("opacity"),
    borderRadius: 10
}));

const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
}));

export default function Projects() {
    return (
        <div style={{ width: "100%" }} className={styles.main}>
            <p>All Projects have GitHub links to look at source code.</p>
            <Box sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%", justifyContent: "space-evenly" }}>
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <ProjImage>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: "relative",
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </ProjImage>
                    </ImageButton>
                ))}
            </Box>
        </div>
    );
}
