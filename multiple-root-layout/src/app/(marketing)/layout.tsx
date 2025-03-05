

export default function MarketingLayout(
    {children}:{children: React.ReactNode;}
){
    return (
         <html>
        <body>
        {children}
        <h1>Marketing Page</h1>
        </body>
        </html>
    );
}