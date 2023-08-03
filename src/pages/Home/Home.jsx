import { useState, useEffect } from "react";

import { Container, Box, Fade } from "@mui/material";

import { statusCheck } from "../../network/Connection";

import WebsiteCard from "./Components/WebsiteCard";

const Home = () => {
    const [status, setStatus] = useState([
        {
            name: "Phaser Lab",
            serverResponse: 200,
            iframeCapture: "./media/yzuic_phaserLab.PNG",
            link: "http://ccj.infocom.yzu.edu.tw",
        },
        {
            name: "Exam Lab",
            serverResponse: 200,
            iframeCapture: "./media/yzuic_examLab.PNG",
            link: "http://ccj.infocom.yzu.edu.tw:3000",
        },
        {
            name: "Task Lab",
            serverResponse: 200,
            iframeCapture: "./media/yzuic_taskLab.PNG",
            link: "http://ccj.infocom.yzu.edu.tw:3001",
        },
    ]);

    useEffect(() => {
        // // 取得 phaserGameLab 訊息
        // statusCheck.yzuic_PhaserGameLab().then(res => {
        //     console.log(res)
        //     // setStatus([
        //     //     {
        //     //         serverResponse: res.status,
        //     //         iframeCapture: "./media/status_error.html",
        //     //     },
        //     // ]);
        // });
    }, []);

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
                            {status.map((value, index) => {
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
