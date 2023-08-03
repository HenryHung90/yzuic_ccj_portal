import { useState } from "react";
import {
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Button,
} from "@mui/material";

const WebsiteCard = ({ webInfo }) => {
    const [handleHover, setHover] = useState(false);

    return (
        <Card
            sx={{
                minWidth: 200,
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
                <h5>伺服器狀態:{webInfo.serverResponse}</h5>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
};

export default WebsiteCard;
