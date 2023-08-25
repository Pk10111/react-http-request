import style from "./Details.module.css";
import styles from "./recipe.module.css";
export const Details = ({ deatils }) => {
  console.log("deatils :>> ", deatils);
  const {
    recipe: {
      calories,
      label,
      image,
      digest,
      healthLabels,
      totalTime,
      totalNutrients,
      ingredientLines,
    },
  } = deatils || {};
  const first3Items = digest?.slice(0, 3);
  const nutrientInfo = [];
  for (const nutrientKey in totalNutrients) {
    const { label, unit, quantity } = totalNutrients[nutrientKey];
    nutrientInfo.push({ label, unit, quantity });
  }
  const firstThreeEntries = nutrientInfo.slice(0, 3);
  return (
    <div className={style["main-div"]}>
      {" "}
      <div className={style["top-div"]}>
        {" "}
        <img alt="" width={250} src={image} />{" "}
        <div className={style["top-side-div"]}>
          {" "}
          <span>{label}</span>{" "}
          <div className={styles["gs-image-wrapper"]}>
            <span className={styles["recipe-name-text"]}>{label}</span>

            <ul className={styles["ul-wrapper"]}>
              {(healthLabels || []).map((item) => {
                return <li className={styles["gs-list-item"]}>{item}</li>;
              })}
            </ul>
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={style["bottom-div"]}>
        {" "}
        <p>Ingredients</p>{" "}
        <hr style={{ color: "gray", width: "50%", marginLeft: "0px" }} />{" "}
        <div style={{ height: "221px", overflow: "auto" }}>
          {(ingredientLines || []).map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>{" "}
      <div className={style["other-detail-div"]}>
        <h2>Calories {Math.ceil(calories)}</h2>
        {(first3Items || []).map((item) => {
          return (
            <div
              className={styles["details-manager-second"]}
              style={{ justifyContent: "flex-start" }}
            >
              <>
                <div className={styles["details-manager-second-inner"]}>
                  <p>{item?.label}</p>
                </div>
                {Math.ceil(item?.total)}
                {item?.unit}
              </>
            </div>
          );
        })}
      </div>{" "}
    </div>
  );
};
