

function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    document.getElementById("Info_Algo").innerText = "Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time. It takes each element from the unsorted part and inserts it into its correct position in the sorted part of the array. Despite its simplicity, it can be efficient for small datasets but becomes inefficient for larger datasets with an average time complexity of O(n^2)."
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update

    enable_buttons();
}
