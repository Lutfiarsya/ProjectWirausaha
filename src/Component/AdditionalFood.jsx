import data from '../data.json'
const AdditionalFood = () => {
const dataMenu = data.product.additional_food

return(
    <div>
        {data && (
            <div>
                {dataMenu.map((items) => {
                    console.log(items.data)
                    return(
                        <div>

                        </div>
                    )
                })}
            </div>
        )}
    </div>
)
}

export default AdditionalFood;

