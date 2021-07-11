import LoadingImg from "../../assets/loading.svg";
import "./styles.scss";

export function LoadingContainer() {
  return (
    <div className="loading-container">
      <img src={LoadingImg} alt="loading" />
    </div>
  )
}