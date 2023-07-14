import P from 'prop-types'

export const HomeText = ( { className , children }) => {

    return (
        <div className={className}> {children}</div>
    )

}

HomeText.propTypes = {
    children: P.node.isRequired,
    className: P.node.isRequired,
}