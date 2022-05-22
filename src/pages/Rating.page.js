import Box from "@material-ui/core/Box";
import {StyledRatingListCard, StyledRatingMediaHeaderCard} from "../components/card/CardControl";
import {StyledCardBox} from "../components/box/BoxControl";
import {StyledCardMediaHeaderTypography} from "../components/typography/TypographyControl";
import {Fragment, useEffect} from "react";
import {useGetSongsListData} from "../hooks/useRSVPData";
import {AlignItemsList} from "../components/list/RatingListItem";
import {  useInView  } from 'react-intersection-observer'
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@mui/material";


export const RatingPage = () => {

    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) fetchNextPage()
    }, [inView])

    const getNextPageParam = (_lastPage, pages) => pages[(pages.length) - 1].data.next ?? undefined

    const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading}
        = useGetSongsListData(getNextPageParam)
    return (
        <>
            <StyledRatingListCard
                sx={{maxWidth: '125ch'}}>
                <StyledCardBox>
                    <StyledRatingMediaHeaderCard
                        component="img"
                        alt="green iguana"
                        image={
                            'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                        }
                    />
                    <Box
                        style={{
                            paddingLeft: '2ch',
                            display: 'flex',
                            justifyContent: "flex-end"
                        }}>
                        <StyledCardMediaHeaderTypography
                            variant={'h2'}
                        >
                            Who is Your winner ?
                        </StyledCardMediaHeaderTypography>
                    </Box>
                </StyledCardBox>
                {data?.pages?.map((group, i) => {
                    return (
                        <Fragment key={i}>
                            {group?.data?.results.map(song =>
                                <AlignItemsList key={song.id} song={song}/>
                            )}
                        </Fragment>
                    )
                })}
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    {(isFetchingNextPage || isLoading) && <CircularProgress color="secondary"/>}
                    <Button
                        sx={{display: 'none'}}
                        ref={ref}
                        onClick={() => fetchNextPage()}
                        disabled={!hasNextPage || isFetchingNextPage}
                    />
                </div>

            </StyledRatingListCard>
        </>
    );
};
