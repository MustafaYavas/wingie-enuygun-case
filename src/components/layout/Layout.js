const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <h1>Header</h1>
            { children }
        </>
    )
}

export default Layout;