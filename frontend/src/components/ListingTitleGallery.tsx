import { Container, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { useState } from "react";

type Props ={
    listingTitle: string;
    listingImagePaths: Array<string>;
};

const ListingTitleGallery = (props: Props) => {
    const {listingTitle, listingImagePaths } = props;
    const [index, setActiveStep] = useState(0);

    const selectImage = (imgIndex: number) => {
        setActiveStep(imgIndex);
    };

    return (
        <Container sx={{ width: "1000px" }}>
            <Typography variant="h6" component="h2">
                {listingTitle}
            </Typography>

            <Grid container
                direction="row"
                justifyContent="left"
                alignItems="center"
                spacing="4px"
            >
                {/* Main Pic */}
                <Grid item 
                    sx={{ 
                        width: "600px",
                        height: "400px",
                        outline: "black 2px solid",
                        background: "lightGrey"
                    }}
                >
                    <img src={listingImagePaths[index]}
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain"
                        }}
                        alt={listingImagePaths[index]}
                    />
                </Grid>

                {/* Thumbnails */}
                <Grid item>
                    <ImageList
                        cols={1}
                        sx={{ width:"100px", height: "400px" }}
                    >
                        {listingImagePaths.map((item, itemIndex) => (
                            <ImageListItem onClick={()=>selectImage(itemIndex)}>
                                <img src={item}
                                    style={{
                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                        display: "block",
                                        overflow: "hidden"
                                    }}
                                    alt={item}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ListingTitleGallery;