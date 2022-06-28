const EmployeeDetailInfos = (props) => {
    const { icon, text } = props;

    return (
        <>
            {icon}
			<p>
				{text}
			</p>
        </>
    )
}

export default EmployeeDetailInfos