import React, { useState } from "react";
import Card from "@mui/material/Card";
import styles from "./recipe.module.css";
import { Details } from "./Details";

export const RecipeList = ({ recipes }) => {
  console.log("recipes", recipes);
  const [open, setOpen] = useState(false);
  const [deatils, setDeatils] = useState([]);

  return !open ? (
    (recipes || []).map((item) => {
      const {
        recipe: {
          calories,
          label,
          image,
          digest,
          healthLabels,
          totalTime,
          totalNutrients,
        },
      } = item || {};
      const first3Items = digest?.slice(0, 3);
      const nutrientInfo = [];
      for (const nutrientKey in totalNutrients) {
        const { label, unit, quantity } = totalNutrients[nutrientKey];
        nutrientInfo.push({ label, unit, quantity });
      }
      const firstThreeEntries = nutrientInfo.slice(0, 3);
      return (
        <div
          onClick={() => {
            setOpen(true);
            setDeatils(item);
          }}
          className={styles["gs-main-wrapper-2"]}
        >
          <Card className={styles["gs-card-recipies"]}>
            <div className={styles["image-text-wrapper"]}>
              <div className={styles["gs-image"]}>
                <img src={image} alt="image recipies" />
              </div>
              <div className={styles["gs-image-wrapper"]}>
                <span className={styles["recipe-name-text"]}>{label}</span>

                <ul className={styles["ul-wrapper"]}>
                  {(healthLabels || []).map((item) => {
                    return <li className={styles["gs-list-item"]}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className={styles["details-wrapper"]}>
              <div className={styles["details-manager"]}>
                <div>{totalTime} servings</div>
                <div className={styles["kacl"]}>
                  <h2>
                    {" "}
                    {Math.ceil(calories)} <sub>Kcal</sub>{" "}
                  </h2>
                </div>
              </div>
              <div className={styles["protien-wrapper"]}>
                {(first3Items || []).map((item) => {
                  return (
                    <div className={styles["details-manager-second"]}>
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
              </div>
              <div className={styles["cories-wrapper"]}>
                {(firstThreeEntries || []).map((item) => {
                  return (
                    <div className={styles["details-manager-second"]}>
                      <p>{item?.label}</p>
                      <p>
                        {Math.ceil(item?.quantity)}
                        {item?.unit}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      );
    })
  ) : (
    <Details deatils={deatils} />
  );
};
