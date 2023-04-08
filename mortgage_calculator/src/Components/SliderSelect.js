import SliderComponent from "./SliderComponent";

const SliderSelect = (props) => {

    const {data, setData} = props;
    const bank_limit= 10000;

    return (
        <div>
            <SliderComponent
                onChange={(e) => {
                    setData({
                        ...data,
                        homeValue: e.target.value.toFixed(0),
                        downpayment: (0.2 * e.target.value).toFixed(0),
                        loanAmount: (0.8 * e.target.value).toFixed(0)
                    });
                }}>
                    defaultValue={data.homeValue}
                    min={1000}
                    max={bank_limit}
                    steps={100}
                    unit="$"
                    amount={data.homeValue}
                    label="Home Value"
                    value={data.homeValue}

            </SliderComponent>
        </div>
    )
}

export default SliderSelect;