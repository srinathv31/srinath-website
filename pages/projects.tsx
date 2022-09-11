// Source Imports
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.css";

const images = [
    {
        url: "https://i.imgur.com/BkIeqWm.png",
        title: "Vital - iOS and Android App",
        width: "30%",
        projectLink: "https://apps.apple.com/us/app/supplementapp/id1612971376"
    },
    {
        url: "https://i.imgur.com/6ZiqJxd.png",
        title: "NBA Data API",
        width: "30%",
        projectLink: "nba-api"
    },
    {
        url: "https://i.imgur.com/a4f9ORb.png",
        title: "University Degree Planner",
        width: "30%",
        projectLink: "https://ud-cisc275-f21.github.io/ud-cis-scheduler-team-12/"
    },
    {
        url: "https://i.imgur.com/mkxvGv4.png",
        title: "NBA Team Wins x Vitamin D Correlation Analysis Tool",
        width: "30%",
        projectLink: "https://github.com/srinathv31/NBATeamAnalysis"
    },
    {
        url: "https://i.imgur.com/jbbx8tZ.png",
        title: "Pokemon made with React",
        width: "30%",
        projectLink: "https://github.com/srinathv31/Pokemon-TB-Game"
    },
    {
        url: "https://i.imgur.com/9V25rLf.jpg",
        title: "NBA Role Player Draft Analysis Tool",
        width: "30%",
        projectLink: "https://github.com/srinathv31/NbaAnalysis"
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
    opacity: 0.35,
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
        <div style={{ width: "100%" }} className={styles.projects}>
            <p>These are some of my side projects that I am very <span className={styles.emphasis}>intersted</span> in/learned <span className={styles.emphasis}>skills</span> from.</p>
            <p style={{ margin: 5 }}>Click on one to learn more about it.</p>
            <Box sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%", justifyContent: "space-evenly" }}>
                {images.map((image) => (
                    <Link key={image.title} 
                        href={image.projectLink.includes("http") ? image.projectLink : `projects/${image.projectLink}`}
                    >
                        <ImageButton
                            focusRipple
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
                    </Link>
                ))}
            </Box>
        </div>
    );
}
