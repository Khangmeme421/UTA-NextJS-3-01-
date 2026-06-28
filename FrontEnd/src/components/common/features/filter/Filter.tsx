import styles from "./Filter.module.scss";
import ChevronRight from "@/components/icons/ChevronRight";
import FilterIcon from "@/components/icons/FilterIcon";
import CollapseButton from "@/components/icons/CollapseButton";

export default function Filter({}) {
  return (
    <div className={styles["filter-menu"]}>
      <div className={styles["filter-menu__header"]}>
        <h2 className={styles["filter-menu__title"]}>Filters</h2>
        <span className={styles["filter-menu__icon"]}><FilterIcon /></span>
      </div>

      {/* Category list */}
      <div className={styles["filter-menu__categories"]}>
        <div className={styles["category-dropdown"]}>
          <span>T-shirts</span>
          <span className={styles["category-dropdown__arrow"]}>
            <ChevronRight />
          </span>
        </div>
        <div className={styles["category-dropdown"]}>
          <span>Shorts</span>
          <span className={styles["category-dropdown__arrow"]}>
            <ChevronRight />
          </span>
        </div>
        <div className={styles["category-dropdown"]}>
          <span>Shirts</span>
          <span className={styles["category-dropdown__arrow"]}>
            <ChevronRight />
          </span>
        </div>
        <div className={styles["category-dropdown"]}>
          <span>Hoodie</span>
          <span className={styles["category-dropdown__arrow"]}>
            <ChevronRight />
          </span>
        </div>
        <div className={styles["category-dropdown"]}>
          <span>Jeans</span>
          <span className={styles["category-dropdown__arrow"]}>
            <ChevronRight />
          </span>
        </div>
      </div>

      <hr className={`divider ${styles["divider--subtle"]}`} />

      {/* Price */}
      <div className={styles["price-slider"]}>
        <div className={styles["price-slider__header"]}>
          <h3 className={styles["price-slider__title"]}>Price</h3>
          <span className={styles["price-slider__toggle"]}><CollapseButton /></span>
        </div>
        <div className={styles["price-slider__track"]}>
          {/* track + range handles go here */}
        </div>
        <div className={styles["price-slider__labels"]}>
          <span>$50</span>
          <span>$200</span>
        </div>
      </div>

      <hr className={`divider ${styles["divider--subtle"]}`} />

      {/* Colors */}
      <div className={styles["color-filter"]}>
        <div className={styles["color-filter__header"]}>
          <h3 className={styles["color-filter__title"]}>Colors</h3>
          <span className={styles["color-filter__toggle"]}><CollapseButton /></span>
        </div>
        <fieldset className={styles["color-filter__grid"]}>
          <legend className="sr-only">Choose a color</legend>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="green" className="sr-only" />
            <span className={styles["color-swatch__circle"]} style={{ backgroundColor: "#16a34a" }} />
          </label>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="red" className="sr-only" />
            <span className={styles["color-swatch__circle"]} style={{ backgroundColor: "#e11d2e" }} />
          </label>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="yellow" className="sr-only" />
            <span className={styles["color-swatch__circle"]} style={{ backgroundColor: "#f3c40f" }} />
          </label>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="orange" className="sr-only" />
            <span className={styles["color-swatch__circle"]} style={{ backgroundColor: "#f3791d" }} />
          </label>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="sky" className="sr-only" />
            <span className={styles["color-swatch__circle"]} style={{ backgroundColor: "#3dc5f0" }} />
          </label>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="blue" defaultChecked className="sr-only" />
            <span className={styles["color-swatch__circle"]} style={{ backgroundColor: "#1d4ed8" }} />
            <span className={styles["color-swatch__check"]}>✓</span>
          </label>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="purple" className="sr-only" />
            <span className={styles["color-swatch__circle"]} style={{ backgroundColor: "#7c3aed" }} />
          </label>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="pink" className="sr-only" />
            <span className={styles["color-swatch__circle"]} style={{ backgroundColor: "#ec1ea0" }} />
          </label>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="white" className="sr-only" />
            <span
              className={`${styles["color-swatch__circle"]} ${styles["color-swatch__circle--outline"]}`}
              style={{ backgroundColor: "#ffffff" }}
            />
          </label>
          <label className={styles["color-swatch"]}>
            <input type="radio" name="color" value="black" className="sr-only" />
            <span className={styles["color-swatch__circle"]} style={{ backgroundColor: "#000000" }} />
          </label>
        </fieldset>
      </div>

      <hr className={`divider ${styles["divider--subtle"]}`} />

      {/* Size */}
      <div className={styles["size-picker"]}>
        <div className={styles["size-picker__header"]}>
          <h3 className={styles["size-picker__title"]}>Size</h3>
          <span className={styles["size-picker__toggle"]}><CollapseButton /></span>
        </div>
        <fieldset className={styles["size-picker__grid"]}>
          <legend className="sr-only">Choose a size</legend>
          {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map(
            (size) => (
              <label className={styles["size-pill"]} key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  defaultChecked={size === "Large"}
                  className="sr-only"
                />
                <span className={styles["size-pill__label"]}>{size}</span>
              </label>
            )
          )}
        </fieldset>
      </div>

      <hr className={`divider ${styles["divider--subtle"]}`} />

      {/* Dress Style — module-scoped, so no clash with global .dress-style */}
      <div className={styles["filter-dress-style"]}>
        <div className={styles["filter-dress-style__header"]}>
          <h3 className={styles["filter-dress-style__title"]}>Dress Style</h3>
          <span className={styles["filter-dress-style__toggle"]}><CollapseButton /></span>
        </div>
        <div className={styles["filter-dress-style__list"]}>
          <div className={styles["category-dropdown"]}>
            <span>Casual</span>
            <span className={styles["category-dropdown__arrow"]}>
              <ChevronRight />
            </span>
          </div>
          <div className={styles["category-dropdown"]}>
            <span>Formal</span>
            <span className={styles["category-dropdown__arrow"]}>
              <ChevronRight />
            </span>
          </div>
          <div className={styles["category-dropdown"]}>
            <span>Party</span>
            <span className={styles["category-dropdown__arrow"]}>
              <ChevronRight />
            </span>
          </div>
          <div className={styles["category-dropdown"]}>
            <span>Gym</span>
            <span className={styles["category-dropdown__arrow"]}>
              <ChevronRight />
            </span>
          </div>
        </div>
      </div>

      <hr className={`divider ${styles["divider--subtle"]}`} />

      <div className={styles["filter-menu__apply"]}>Apply Filter</div>
    </div>
  );
}