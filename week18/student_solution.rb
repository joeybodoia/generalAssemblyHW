# Hello World
p "Hello World"

adjective = "Big Bad"
p "Hello #{adjective} World"

hello_world = "Hello World "
hello_world = hello_world.upcase

p hello_world

# Nums Array and Enumerables
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
# 1
p nums.uniq
# 2
nums.push(22)
p nums
nums.pop()
p nums
p nums.unshift(1)
p nums.shift()
# 3
p nums.include?(8)
# 4
p nums.find_all {|num| num>10}
# 5
p nums.all? {|num| num>0}
# 6
p nums.any? {|num| num%8==0}
# 7
p nums.count {|num| num>4}
# 8
nums.each_with_index do |num,idx|
    p num*idx
end
# 9
p nums.find {|num| num%7==0 && num%5==0 && num>0}
# 10
p nums.find_index {|num| num%7==0 && num%5==0 && num>0}
# 11
p nums.first(3)
# 12
p nums.last(5)
# 13
p nums.group_by {|num| num%3}
# 14
p nums.min()
p nums.max()
# 15
p nums.reject {|num| num%3==0}
# 16
p nums.select {|num| num%5==0}


# Color Array
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# 1
p colors.sample(1)
# 2
p colors.reverse
# 3
p colors.map(&:upcase)



# Methods

def find_area height,width 
    height*width
end

p find_area(5,6)

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
def multiply_each_by_five arr
    for i in 0...arr.length do
        arr[i]=arr[i]*5
    end
    return arr
end

p multiply_each_by_five(nums)

# Hashes

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}



def print_price hash 
    hash[:price]
end

p print_price book

def print_item_sums hash1,hash2
    hash1[:price]+hash2[:price]
end

p print_item_sums(lamp,table)

p print_item_sums(table,book)

# Euler problem 1
def euler_sum limit
    sum=0
    for i in 0...limit do
        if i%3==0 || i%5==0
            sum +=i
        end
    end
    return sum
end

p euler_sum(1000)

# check prime
def check_prime? num 
    for i in 2...Math.sqrt(num)+1 do
        if num ==2
            return true
        end
        if num%i==0 
            return false
        end
    end
    return true
end

p check_prime? 4

def get_primes limit
    for i in 2...limit do
        if check_prime? i
            p i
        end
    end
end

p get_primes 100