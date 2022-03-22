let current = new Date();
let cDate = current.getDate() + '-' + (current.getMonth() + 1) + '-' + current.getFullYear();


let ShowDate = () => {
    return(
        <div class = 'date'>
            <h2>
                {cDate}
            </h2>
        </div>
    );
}
ShowDate()

export default ShowDate;