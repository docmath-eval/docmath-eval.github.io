function generateTable() {
  var data = development_score_table; // The variable from model_scores_development.js

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
                <td class="js-sort-number"><strong>#</strong></td>
                <td class="js-sort-number"><strong>Model</strong></td>
                <td class="js-sort-number"><strong>Size</strong></td>
                <td class="js-sort-number"><strong>Notes</strong></td>
                <td class="js-sort-number"><strong>SS(P)</strong></td>
                <td class="js-sort-number"><strong>SS(C)</strong></td>
                <td class="js-sort-number"><strong>CS(P)</strong></td>
                <td class="js-sort-number"><strong>CS(C)</strong></td>
                <td class="js-sort-number"><strong>SL(P)</strong></td>
                <td class="js-sort-number"><strong>SL(C)</strong></td>
                <td class="js-sort-number"><strong>CL(P)</strong></td>
                <td class="js-sort-number"><strong>CL(C)</strong></td>
                <td class="js-sort-number"><strong><u>AVG(P)</u></strong></td>
                <td class="js-sort-number"><strong><u>AVG(C)</u></strong></td>
            </tr>`;

  // add human performance to the top of the table
  table += `<tr>
            <td>-</td>
            <td><b>Human Expert</b></td>
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

        table += `<td><b>${entry.Model}</b></td>`;
        table += `<td>${entry.Size}</td>`;
        table += `<td>${entry.Notes}</td>`;    

        table += `<td>${entry["SS(P)"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["SS(C)"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["CS(P)"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["CS(C)"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["SL(P)"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["SL(C)"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["CL(P)"].toFixed(1).toString()}</td>`;
        table += `<td>${entry["CL(C)"].toFixed(1).toString()}</td>`;
        table += `<td><b>${entry["AVG(P)"].toFixed(1).toString()}</b></td>`;
        table += `<td><b>${entry["AVG(C)"].toFixed(1).toString()}</b></td>`;
        }
        table += '</tr>';

  table += '</table>';
  document.getElementById('development_leaderboard').innerHTML = table; // Assuming you have a div with id 'container' where the table will be placed
}

// Call the function when the window loads
document.addEventListener('DOMContentLoaded', generateTable);
