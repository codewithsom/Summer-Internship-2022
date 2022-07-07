function max_of_three(i, j, k) 
{
  max_val = 0;
  if (i > j)
  {
    max_val = i;
  } 
  else
  {
    max_val = j;
  }
  if (k > max_val) 
  {
    max_val = k;
  }
  return max_val;
}

console.log(max_of_three(-99,023,192));
console.log(max_of_three(640,-280,150));
console.log(max_of_three(101224,85112,-25086));
