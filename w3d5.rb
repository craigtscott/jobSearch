def getRanges(collected, desired)
  des = (desired[0]..desired[1]).to_a
  ran = []
  output = []
  collected.each do |arr|
    ran << (arr[0]..arr[1]).to_a
  end
  ran = ran.flatten
  unCol = des - ran

  output = getRan(unCol, desired)
  p output
end

def getRan(arr, des)
  output = []
  arr.each_with_index do |num, idx|
    range = num - 1
    if arr[idx+1] == num + 1 and arr[idx-1] == num - 1
      next
    else
      if num-1 >= des[0] && num + 1 <= des[1]
        output << [num-1, num+1]
      end
    end
  end
  return output
end


col = [[1,4],[9,10],[6,7]]
ran = [1,12]
getRanges(col, ran)
