import { Aside } from "../components/Aside";
import "./globals.css";

export const metadata = {
    title: "Code Connect",
    description: "Feito por Thiago Sousa",
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Aside />
                {children}
            </body>
        </html>
    )
}