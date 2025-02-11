function Detail(props) {
    return (
        <div className="h-[490px] w-[250px] m-3 rounded-md shadow-2xl bg-slate-200 p-8">
            {props.details[0].textDetails}
        </div>
    )
}

export default Detail