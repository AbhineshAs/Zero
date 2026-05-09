from PIL import Image
import sys

def convert_to_ico(input_path, output_path):
    img = Image.open(input_path)
    img.save(output_path, format='ICO', sizes=[(32, 32)])

if __name__ == "__main__":
    convert_to_ico(sys.argv[1], sys.argv[2])
