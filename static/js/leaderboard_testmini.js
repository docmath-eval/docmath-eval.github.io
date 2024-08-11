function generateTable() {
  var data = testmini_score_table; // The variable from model_scores_testmini.js

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
  <td class="js-sort-number" rowspan="2"><strong>#</strong></td>
  <td class="js-sort-number" rowspan="2"><strong>Model</strong></td>
  <td class="js-sort-number" rowspan="2"><strong>Size</strong></td>
  <td class="js-sort-number" rowspan="2"><strong>Notes</strong></td>
  <td class="js-sort-number" colspan="2"><strong>SimpShort</strong></td>
  <td class="js-sort-number" colspan="2"><strong>CompShort</strong></td>
  <td class="js-sort-number" colspan="2"><strong>SimpLong</strong></td>
  <td class="js-sort-number" colspan="2"><strong>CompLong</strong></td>
  <td class="js-sort-number" colspan="2"><strong><u>AVG</u></strong></td>
</tr>
<tr>
  <td class="js-sort-number"><strong></strong></td>
  <td class="js-sort-number"><strong></strong></td>
  <td class="js-sort-number"><strong></strong></td>
  <td class="js-sort-number"><strong></strong></td>
  <td class="js-sort-number"><strong>PoT</strong></td>
  <td class="js-sort-number"><strong>CoT</strong></td>
  <td class="js-sort-number"><strong>PoT</strong></td>
  <td class="js-sort-number"><strong>CoT</strong></td>
  <td class="js-sort-number"><strong>PoT</strong></td>
  <td class="js-sort-number"><strong>CoT</strong></td>
  <td class="js-sort-number"><strong>PoT</strong></td>
  <td class="js-sort-number"><strong>CoT</strong></td>
  <td class="js-sort-number"><strong>PoT</strong></td>
  <td class="js-sort-number"><strong>CoT</strong></td>
</tr>`;

  // add human performance to the top of the table
  table += `<tr>
            <td>-</td>
            <td style="text-align: left;"><b>Human Expert</b></td>
            <td>-</td>
            <td>-</td>
            <td>91.0</td>
            <td>91.0</td>
            <td>87.0</td>
            <td>87.0</td>
            <td>84.0</td>
            <td>84.0</td>
            <td>76.0</td>
            <td>76.0</td>
            <td><b>-</b></td>
            <td><b>-</b></td>
        </tr>`;

      // get all keys in data
      var keys = Object.keys(data);

      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        console.log(key);
        var entry = data[key];

        table += '<tr>';
        table += `<td>${key}</td>`;

        table += `<td style="text-align: left;"><b>${entry["model_name"]}</b></td>`;
        table += `<td>${entry.Size}</td>`;
        table += `<td>${entry.Notes}</td>`;    

        table += `<td>${entry["simpshort_pot"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["simpshort_cot"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["compshort_pot"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["compshort_cot"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["simplong_pot"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["simplong_cot"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["complong_pot"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["complong_cot"].toFixed(1).toString()}</td>`;
        table += `<td><b>${entry["average_pot"].toFixed(1).toString()}</b></td>`;
        table += `<td><b>${entry["average_cot"].toFixed(1).toString()}</b></td>`;
        }
        table += '</tr>';

  table += '</table>';
  document.getElementById('testmini_leaderboard').innerHTML = table; // Assuming you have a div with id 'container' where the table will be placed
}

// Call the function when the window loads
document.addEventListener('DOMContentLoaded', generateTable);
