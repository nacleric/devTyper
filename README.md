# TODO:
x Events that trigger style changes to each character (buggy)
- Find a good font theme (Roboto Mono, Monospaced)

# Later's:
- login/logout
- Integrate firebase
- fix the way spans are rendered

const Person = ({name, age, children}) => {
    return (
        <div>
            <p>I'm a {name}! I'm {age} years old.</p>
            <p>{children}</p>
        </div>
    )
};

export default Person; 


# Done
x Render span elements for each individual character
