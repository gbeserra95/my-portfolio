import Image from "next/image"

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'

import { Typography, useMediaQuery } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    ${props => props.theme.breakpoints.down('md')} {
        flex-direction: column;
        gap: 32px;
        align-items: flex-start;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    min-width: 720px;
    height: 472px;
    margin-left: 20px;

    ${props => props.theme.breakpoints.down('lg')} {
        min-width: 512px;
        height: 338px;
    }

    ${props => props.theme.breakpoints.down('1190')} {
        min-width: 452px;
        height: 298px;
    }

    ${props => props.theme.breakpoints.down('md')} {
        min-width: 100%;
        min-height: calc(0.66 * (100vw));
        margin: 0 auto;
    }
    
    &::before {
        content: "";
        position: absolute;
        top: 20px;
        left: -20px;
        min-width: 720px;
        min-height: 472px;
        background-color: transparent;
        box-sizing: border-box;
        border: 1px solid ${props => props.theme.palette.primary.main};

        ${props => props.theme.breakpoints.down('lg')} {
            min-width: 512px;
            min-height: 338px;
        }

        ${props => props.theme.breakpoints.down('1190')} {
            min-width: 452px;
            min-height: 298px;
        }

        ${props => props.theme.breakpoints.down('md')} {
            min-width: 100%;
            min-height: 66%;
            display: none;
        }
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;

    ${props => props.theme.breakpoints.down('1190')} {
        gap: 16px;
    }
`

const Title = styled.div`
    margin-left: 48px;

    ${props => props.theme.breakpoints.down('md')} {
        text-align: left;
        margin-left: 0;
    }
`

const Description = styled.div`
    box-sizing: border-box;
    padding: 16px 48px;
    border: 1px solid ${props => props.theme.palette.primary.main};
    border-left: none;

    ${props => props.theme.breakpoints.down('md')} {
        border: none;
        padding: 0;
    }
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 48px;
    width: 100%;

    ${props => props.theme.breakpoints.down('md')} {
        padding: 0;
        margin-bottom: 48px;
    }
`

const LibrariesAndTools = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
`

const SocialIcons = styled.div`
    display: flex;
    font-size: 24px;
    gap: 24px;
    color: ${props => props.theme.palette.text.light};
`


export default function ProjectCard() {
    const lowerThanMd = useMediaQuery(theme => theme.breakpoints.down('md'))

    return(
        <Wrapper>
            {lowerThanMd && 
                <Title>
                    <Typography variant="p" fontSize="18px" color={theme => theme.palette.text.light}>Personal Project</Typography>
                    <Typography variant="h2" color={theme => theme.palette.highlight.main}>myTasks</Typography>
                </Title>
            }
            <ImageWrapper>
                <Image
                    src="/assets/myTasks.png"
                    layout="fill"
                    objectFit="fill"
                    alt="myTasks app image"
                />
            </ImageWrapper>
            <Content>
                {!lowerThanMd &&
                    <Title>
                        <Typography variant="p" fontSize="18px" color={theme => theme.palette.text.light}>Personal Project</Typography>
                        <Typography variant="h2" color={theme => theme.palette.highlight.main}>myTasks</Typography>
                    </Title>
                }
                <Description>
                    <Typography variant="p" color={theme => theme.palette.text.light}>
                        MyTasks is a web to-do list developed with the purpose of testing my React skills. In this project, you may edit and organize the order of your list by dragging and dropping items among them. All data is saved within the browser LocalStorage.
                    </Typography>
                </Description>
                {!lowerThanMd &&
                    <Bottom>
                        <LibrariesAndTools>
                            <Typography variant="p" fontSize="18px" margin="0" fontWeight="500" color="secondary">React</Typography>
                            <Typography variant="p" fontSize="18px" margin="0" fontWeight="500" color="secondary">React Beautiful DnD</Typography>
                            <Typography variant="p" fontSize="18px" margin="0" fontWeight="500" color="secondary">LocalStorage</Typography>
                        </LibrariesAndTools>
                        <SocialIcons>
                            <GitHubIcon />
                            <LinkIcon />
                        </SocialIcons>
                    </Bottom>
                }
            </Content>
            {lowerThanMd &&
                <Bottom>
                    <LibrariesAndTools>
                        <Typography variant="p" fontSize="18px" margin="0" fontWeight="500" color="secondary">React</Typography>
                        <Typography variant="p" fontSize="18px" margin="0" fontWeight="500" color="secondary">React Beautiful DnD</Typography>
                        <Typography variant="p" fontSize="18px" margin="0" fontWeight="500" color="secondary">LocalStorage</Typography>
                    </LibrariesAndTools>
                    <SocialIcons>
                        <GitHubIcon />
                        <LinkIcon />
                    </SocialIcons>
                </Bottom>
            }
        </Wrapper>
    )
}