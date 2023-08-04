import { useState, useEffect } from "react";

import { Container, Box, Fade } from "@mui/material";

import { statusCheck } from "../../network/Connection";

import WebsiteCard from "./Components/WebsiteCard";

const Home = () => {
    const [taskLabStatus, setTaskLabStatus] = useState({
        name: "Task Lab",
        serverResponse: "",
        iframeCapture: "./media/status_error.PNG",
        serverMessage: "",
        link: process.env.REACT_APP_TASKLAB_URL,
    });

    const [gameLib_109_Status, setGameLib_109_Status] = useState({
        name: "Game Library (109)",
        serverResponse: "",
        iframeCapture: "./media/status_error.PNG",
        serverMessage: "",
        link: process.env.REACT_APP_GAMELIB_109_URL,
    });

    const [gameLib_110_Status, setGameLib_110_Status] = useState({
        name: "Game Library (110)",
        serverResponse: "",
        iframeCapture: "./media/status_error.PNG",
        serverMessage: "",
        link: process.env.REACT_APP_GAMELIB_110_URL,
    });

    const [phaserLabStatus, setPhaserLabStatus] = useState({
        name: "Phaser Lab",
        serverResponse: "",
        serverMessage: "",
        iframeCapture: "./media/status_error.PNG",
        link: process.env.REACT_APP_PHASERLAB_URL,
    });

    const [examLabStatus, setExamLabStatus] = useState({
        name: "Exam Lab",
        serverResponse: "",
        serverMessage: "",
        iframeCapture: "./media/status_error.PNG",
        link: process.env.REACT_APP_EXAMLAB_URL,
    });

    useEffect(() => {
        checkTaskLabStatus();
        checkGameLib_109_Status();
        checkGameLib_110_Status();
        checkPhaserGameLabStatus();
        checkExamLabStatus();
    }, []);

    // 取得 task Lab 訊息
    const checkTaskLabStatus = () => {
        statusCheck.yzuic_taskLab().then(res => {
            setTaskLabStatus({
                name: "Task Lab",
                serverResponse: res.status,
                serverMessage: res.message,
                iframeCapture:
                    res.status === 200
                        ? "./media/yzuic_taskLab.PNG"
                        : "./media/status_error.PNG",
                link: process.env.REACT_APP_TASKLAB_URL,
            });
        });
    };

    // 取得 game Lib 109 訊息
    const checkGameLib_109_Status = () => {
        statusCheck.yzuic_gameLib_109().then(res => {
            setGameLib_109_Status({
                name: "Game Library (109)",
                serverResponse: res.status,
                serverMessage: res.message,
                iframeCapture:
                    res.status === 200
                        ? "./media/yzuic_gameLib.PNG"
                        : "./media/status_error.PNG",
                link: process.env.REACT_APP_GAMELIB_109_URL,
            });
        });
    };

    // 取得 game Lib 110 訊息
    const checkGameLib_110_Status = () => {
        statusCheck.yzuic_gameLib_110().then(res => {
            setGameLib_110_Status({
                name: "Game Library (110)",
                serverResponse: res.status,
                serverMessage: res.message,
                iframeCapture:
                    res.status === 200
                        ? "./media/yzuic_gameLib.PNG"
                        : "./media/status_error.PNG",
                link: process.env.REACT_APP_GAMELIB_110_URL,
            });
        });
    };

    // 取得 phaserGameLab 訊息
    const checkPhaserGameLabStatus = () => {
        statusCheck.yzuic_PhaserGameLab().then(res => {
            setPhaserLabStatus({
                name: "Phaser Lab(28102)",
                serverResponse: res.status,
                serverMessage: res.message,
                iframeCapture:
                    res.status === 200
                        ? "./media/yzuic_phaserLab.PNG"
                        : "./media/status_error.PNG",
                link: process.env.REACT_APP_PHASERLAB_URL,
            });
        });
    };

    // 取得 Exam Lab 訊息
    const checkExamLabStatus = () => {
        statusCheck.yzuic_ExammingLab().then(res => {
            setExamLabStatus({
                name: "Exam Lab",
                serverResponse: res.status,
                serverMessage: res.message,
                iframeCapture:
                    res.status === 200
                        ? "./media/yzuic_examLab.PNG"
                        : "./media/status_error.PNG",
                link: process.env.REACT_APP_EXAMLAB_URL,
            });
        });
    };

    return (
        <Fade in={true} timeout={1500}>
            <Box sx={{ width: "100vw", height: "100vh" }}>
                <Container
                    sx={{
                        height: "100vh",
                        zIndex: 5,
                        padding: "15vh 10vw",
                        transitionDuration: "0.5s",
                    }}
                    maxWidth="xl"
                >
                    <Container
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.5)",
                            boxShadow: "1px 1px 3px 1px rgba(0,0,0,0.3)",
                            padding: "30px",
                            fontFamily: "Roboto Condensed, sans-serif",
                        }}
                    >
                        <Box>
                            <h1
                                style={{
                                    fontSize: "50px",
                                    letterSpacing: "20px",
                                    paddingLeft: "20px",
                                }}
                            >
                                YZUIC
                            </h1>
                            <h1>Class Portal Center</h1>
                        </Box>
                        <Box>
                            {[
                                taskLabStatus,
                                gameLib_109_Status,
                                gameLib_110_Status,
                                phaserLabStatus,
                                examLabStatus,
                            ].map((value, index) => {
                                return <WebsiteCard webInfo={value} />;
                            })}
                        </Box>
                        <Box id={"Test"}>
                            <h5>張家榮 教授</h5>
                            <h6>Made by Henry.H</h6>
                        </Box>
                    </Container>
                </Container>
            </Box>
        </Fade>
    );
};

export default Home;
