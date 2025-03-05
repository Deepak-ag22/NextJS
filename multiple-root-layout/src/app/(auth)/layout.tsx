

export default function AuthLayout({children}:{children: React.ReactNode;}){
    return( <html>
    <body>
    {children}
    <h1>Auth Page</h1>
    </body>
    </html>);
}