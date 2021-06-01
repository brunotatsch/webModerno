function find_max(nums)
{
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  
  for (let num of nums)
  {
    if (num > max_num)
    {
      // (Fill in the missing line here)
     // num = max_num
     // max_num += 1
      //max_num = num
      //max_num += num
      console.log(max_num)
    }
  }
  
  return max_num;

}

const max_num_result = find_max([10,11,23,23])

console.log(max_num_result)
