export class workout {
  constructor(container) {
    this.container = container;
    this.container.innerHTML = workout.table().trim();
    this.localArray = JSON.parse(
      localStorage.getItem(workout.Local_array_key) || "[]"
    );
    this.showUpdate();
    this.container.querySelector(".add-btn").addEventListener("click", () => {
      let newDate = new Date(),
        day = newDate.getDate().toString().padStart(2, "0"),
        month = (newDate.getMonth() + 1).toString().padStart(2, "0"),
        year = newDate.getFullYear();
      this.addNewEntry({
        date: `${year}-${month}-${day}`,
        work: "Walking",
        duration: 15,
      });
    });
  }
  static Local_array_key = "nhsdfkkobkjdfoe";
  static table() {
    return `<table>
                    <thead class="header">
                        <tr>
                            <th>Date</th>
                            <th>Workout</th>
                            <th>Duration</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="entries">
                        
                    </tbody>
                    <tbody class="add-btn">
                        <tr>
                            <td colspan="4">
                                <span>Add New Workout &plus;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>`;
  }
  static entries() {
    return `<tr>
                    <td>
                        <input type="date" class="dates">
                    </td>
                    <td>
                        <select name="" id="workout-options">
                            <option value="Walking">Walking</option>
                            <option value="Running">Running</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Jogging">Jogging</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Stretching">Stretching</option>
                        </select>
                    </td>
                    <td>
                        <input type="number" class="duration">
                        <span class="duration-text">Minutes</span>
                    </td>
                    <td>
                        <button class="close">&times;</button>
                    </td>
                </tr>`;
  }
  showUpdate() {
    const entries = this.container.querySelector(".entries");
    entries.innerHTML = ``;
    const addData = element => {
      const template = document.createElement("template");
      template.innerHTML = workout.entries();
      let row = template.content.firstElementChild;
      row.querySelector(".dates").value = element.date;
      row.querySelector("#workout-options").value = element.work;
      row.querySelector(".duration").value = element.duration;

      //to update
      row.querySelector(".dates").addEventListener("change", ({ target }) => {
        element.date = target.value;
        this.saveToLocal();
      });
      row
        .querySelector("#workout-options")
        .addEventListener("change", ({ target }) => {
          element.work = target.value;
          this.saveToLocal();
        });
      row
        .querySelector(".duration")
        .addEventListener("change", ({ target }) => {
          element.duration = target.value;
          this.saveToLocal();
        });
      row.querySelector(".close").addEventListener("click", () => {
        this.deleteEntry(element);
      });
      entries.appendChild(row);
    };
    this.localArray.forEach(element => {
      addData(element);
    });
  }
  deleteEntry(delElement) {
    // this.localArray.forEach((element, index) => {
    //     if (element !== delElement) {
    //         this.localArray.splice(index, 1)
    //     }
    // })
    this.localArray = this.localArray.filter(element => {
      return element !== delElement;
    });
    this.saveToLocal();
    this.showUpdate();
  }
  saveToLocal() {
    localStorage.setItem(
      workout.Local_array_key,
      JSON.stringify(this.localArray)
    );
  }
  addNewEntry(data) {
    this.localArray.push(data);
    this.saveToLocal();
    this.showUpdate();
  }
}
