require 'byebug'

def find_island(mat)
  count = 0
  rows = mat.length
  cols = mat[0].length
  visted_islands = []
 mat.each_with_index do |val, y|
    val.each_with_index do |val2, x|

      if val2 == 1 && !visted_islands.include?([y,x])
        count += 1
        visted_islands << [y,x]
        visted_islands.concat(co_ordinates(x,y,mat,visted_islands))
      end
        
   end
  end
  return count
end 

def co_ordinates(x,y,mat,visted_islands)
  island_arr = []
  arr = [[x,y-1],
        [x-1, y],[x+1,y],
        [x,y+1]]
        
  arr.each do |el|
    if el ==[1,0]
    end
    
      if 0 <= el[0] && el[0] < mat[0].length - 1 && 0 <= el[1] && el[1] < mat.length - 1
        if !(visted_islands.include?([el[0], el[1]])) && mat[el[1]][el[0]] == 1
          island_arr << [el[1], el[0]]
        end
      end
  end
  island_arr
end 




matrix = [[1,0,0,0,1],[1,0,0,0,0],[0,0,1,1,0]]
puts find_island(matrix)