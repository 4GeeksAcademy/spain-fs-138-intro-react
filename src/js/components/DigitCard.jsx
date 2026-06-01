export default function DigitCard({ value }) {
    console.log("ENTRAMOS", value)
    return (
        <div
            className="card text-white bg-dark mx-1"
            style={{ width: "60px", height: "80px" }}
        >
            <div className="card-body d-flex align-items-center justify-content-center p-0">
                <span
                    style={{
                        fontSize: "2.5rem",
                        fontFamily: "monospace",
                        fontWeight: "bold",
                    }}
                >
                    {value}
                </span>
            </div>
        </div>
    );
}
