import { JetBrains_Mono, Noto_Sans_JP, Roboto_Flex, Noto_Color_Emoji } from 'next/font/google'

export const roboto = Roboto_Flex({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

export const jbmono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains-mono',
})

export const notojp = Noto_Sans_JP({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-notojp',
})

export const notoemoji = Noto_Color_Emoji({
    weight: '400',
    subsets: ['emoji'],
    display: 'swap',
    variable: '--font-notoemoji',
})