import "./styles.scss";

type PageNavigationElementType ={
  onClick(): void,
  isSelected: boolean,
  page: number,
}

export function PageNavigationElement({isSelected, onClick, page}: PageNavigationElementType) {
  return(
    <button className={`${isSelected && 'selected'}`} onClick={onClick}>
      {page}
    </button>
  );
}