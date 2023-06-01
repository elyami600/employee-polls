const Loging = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="center" >
             <h4 className="center">Loging page</h4>
             <form onSubmit={handleSubmit}>
                <input type="text" name="username" required placeholder="UserName"/>
                <br/>
                <button>Loging</button>
             </form>

        </div>
    )
}
export default Loging