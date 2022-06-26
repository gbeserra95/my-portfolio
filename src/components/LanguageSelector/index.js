import React from "react"

import { useRouter } from "next/router"
import { useState } from "react"

import Link from "next/link"

import styled from "@emotion/styled"

const Wrapper = styled.ul`
    display: flex;
    height: 24px;
    align-items: center;
    gap: 32px;
    font-size: 23px;
    font-weight: 300;
    transition: 0.4s ease-in-out;
    padding: 0;
    list-style: none;
`

const Item = styled.li`
    color: ${props => props.active ? props.theme.palette.primary.main : props.theme.palette.text.light};
    transition: 0.4s;
    cursor: pointer;
    
    &:hover {
        color: ${props => props.theme.palette.primary.main};
    }
`

export default function LanguageSelector() {
    const router = useRouter()

    return (
        <Wrapper>
            {React.Children.toArray(
                router.locales.map((locale) => 
                <Item active={router.locale.slice(0, 2) === locale.slice(0, 2) ? 1 : 0}>
                    <Link
                        href={router.pathname}
                        locale={locale}
                        scroll={false}
                    >
                        <a>
                            {locale.slice(0, 2).toUpperCase()}
                        </a>
                    </Link>
                </Item>
            ))}
        </Wrapper>
    )
}