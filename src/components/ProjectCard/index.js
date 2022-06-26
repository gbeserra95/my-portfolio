import React from "react"

import Image from "next/image"

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'

import { Typography, useMediaQuery } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 160px;

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
    border: 1px solid ${props => props.theme.palette.primary.main};

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

    a {
        transition: 0.4s;

        &:hover {
            color: ${props => props.theme.palette.primary.main};
        }
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


export default function ProjectCard({ title, category, description, stacks, github, link, preview}) {
    const lowerThanMd = useMediaQuery(theme => theme.breakpoints.down('md'))

    return(
        <Wrapper>
            {lowerThanMd && 
                <Title>
                    <Typography variant="p" fontSize="18px" color={theme => theme.palette.text.light}>{category}</Typography>
                    <Typography variant="h2" color={theme => theme.palette.highlight.main}>{title}</Typography>
                </Title>
            }
            <ImageWrapper>
                <Image
                    src={preview}
                    layout="fill"
                    objectFit="fill"
                    alt={title}
                />
            </ImageWrapper>
            <Content>
                {!lowerThanMd &&
                    <Title>
                        <Typography variant="p" fontSize="18px" color={theme => theme.palette.text.light}>{category}</Typography>
                        <Typography variant="h2" color={theme => theme.palette.highlight.main}>{title}</Typography>
                    </Title>
                }
                <Description>
                    <Typography variant="p" color={theme => theme.palette.text.light}>
                        {description}
                    </Typography>
                </Description>
                {!lowerThanMd &&
                    <Bottom>
                        <LibrariesAndTools>
                            {React.Children.toArray(
                                stacks.map(stack => 
                                    <Typography variant="p" fontSize="18px" margin="0" fontWeight="500" color="secondary">{stack}</Typography>
                                )
                            )}
                        </LibrariesAndTools>
                        <SocialIcons>
                            <a href={github} target="_blank" rel="noreferrer" aria-label={`${title} Github`}>
                                <GitHubIcon />
                            </a>
                            <a href={link} target="_blank" rel="noreferrer" aria-label={`${title} Link`}>
                                <LinkIcon />
                            </a>
                        </SocialIcons>
                    </Bottom>
                }
            </Content>
            {lowerThanMd &&
                <Bottom>
                    <LibrariesAndTools>
                        {React.Children.toArray(
                            stacks.map(stack => 
                                <Typography variant="p" fontSize="18px" margin="0" fontWeight="500" color="secondary">{stack}</Typography>
                            )
                        )}
                    </LibrariesAndTools>
                    <SocialIcons>
                        <a href={github} target="_blank" rel="noreferrer" aria-label={`${title} Github`}>
                            <GitHubIcon />
                        </a>
                        <a href={link} target="_blank" rel="noreferrer" aria-label={`${title} Link`}>
                            <LinkIcon />
                        </a>
                    </SocialIcons>
                </Bottom>
            }
        </Wrapper>
    )
}