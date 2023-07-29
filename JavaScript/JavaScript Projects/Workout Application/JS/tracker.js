export default class workoutTracker {
    constructor(root) {
        this.root = root;
        this.root.insertAdjacentHTML('afterbegin', workoutTracker.html())
    }
    static html() {
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
                </table>`
    }
    static enterieshtml() {
        return `<tr>
                    <td>
                        <input type="date" class="date">
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
                </tr>`
    }
    
}