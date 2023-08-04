import { useState } from "react";
import {
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Button,
} from "@mui/material";

import CloudIcon from "@mui/icons-material/Cloud";
import CloudOffIcon from "@mui/icons-material/CloudOff";

const WebsiteCard = ({ webInfo }) => {
    const [handleHover, setHover] = useState(false);

    return (
        <Card
            sx={{
                minWidth: 200,
                minHeight: 270,
                transitionDuration: "0.3s",
                display: "inline-block",
                margin: 5,
                boxShadow: handleHover
                    ? "1px 1px 5px 3px rgba(255,0,0,0.4)"
                    : "1px 1px 3px 2px rgba(0,0,0,0.4)",
            }}
            onClick={e => {
                window.location.href = webInfo.link;
            }}
            onMouseEnter={e => {
                setHover(true);
            }}
            onMouseLeave={e => {
                setHover(false);
            }}
        >
            <CardMedia
                sx={{ height: 140, width: "100%" }}
                image={webInfo.iframeCapture}
                title="Website"
            />
            <CardContent sx={{ userSelect: "none" }}>
                <h3>{webInfo.name}</h3>
                <h5>伺服器狀態</h5>
                {webInfo.serverResponse === 200 ? (
                    <CloudIcon color="success" />
                ) : (
                    <CloudOffIcon color="secondary" />
                )}
                {webInfo.serverMessage && (
                    <h5>錯誤訊息:{webInfo.serverMessage}</h5>
                )}
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
};

export default WebsiteCard;
