/**
 * Created by md.nazrulislam on 01/08/2019.
 */
function solution(a, x, y, z) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
        if (x >= a[i]) {
            //can fuel
            x = x - a[i];
            a.splice(i, 1);
            return x;
        } else {
            return -1;
        }


        if (y >= a[i]) {
            y = y - a[i];
            a.splice(i, 1);
            return y;
        } else {
            return -1;
        }

        if (z >= a[i]) {
            z = z - a[i];
            a.splice(i, 1);
            return z;
        } else {
            // console.log(a[i]);
            return -1;
        }
    }
}

window.onload = solution([2, 8, 4, 3, 2], 7, 11, 3);/**
 * Created by md.nazrulislam on 01/08/2019.
 */
