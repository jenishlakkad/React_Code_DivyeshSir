export const HOC2 = (Component) => {
    const newComponent2 = ( props) => {
        return <>
            {/* <h2>Jenish</h2> */}
            <Component props={props}/>
        </>
    }
    return newComponent2
}
