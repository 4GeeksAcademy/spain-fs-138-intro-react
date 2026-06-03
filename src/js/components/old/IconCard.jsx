import { Clock } from "lucide-react";

export default function IconCard() {
    return (
        <div
            className="card text-white bg-dark mx-1"
            style={{ width: "60px", height: "80px" }}
        >
            <div className="card-body d-flex align-items-center justify-content-center p-0">
                <Clock size={32} />
            </div>
        </div>
    );
}
