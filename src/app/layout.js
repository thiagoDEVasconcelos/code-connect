export const metadata = {
    title: "Code Connect",
    description: "Feito por Thiago Sousa",
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    )
}