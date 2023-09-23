
const Row_body = ({ data }) => {
    return (
        <>

            {data.map(object => {
                return <tr key={object.id}>
                    {Object.values(object).map((value, index) => {
                        return <td key={index}>{value}</td>
                    })}
                </tr>
            })}
        </>
    )

};

export default Row_body;