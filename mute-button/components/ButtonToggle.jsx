function ButtonToggle(props) {

    const { toggle, setToggle } = props

    const updateToggle = () => {
        if (toggle === 0) {
            setToggle(1)
        }
        else if (toggle === 1) {
            setToggle(0)
        }
    }

    if (toggle === 0) {
        return (
            <button onClick={updateToggle}>
                <img src="./icons/on.svg" className="logo on-button" alt="on button" />
            </button>
        )
    } else {
        return (
            <button onClick={updateToggle}>
                <img src="./icons/off.svg" className="logo on-button" alt="on button" />
            </button>
        )
    }
}

export default ButtonToggle