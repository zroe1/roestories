import os

VALID_FILE_ENDINGS = ['.jpg', '.jpeg', '.png', '.html', '.css', '.js', '.pdf',
                      'ico',]

def get_all_paths(current_path , all_files):
    in_dir = os.listdir(current_path)
    files_in_dir = []
    directories = []

    for file in in_dir:
        if os.path.isdir(current_path + '/' + file):
            directories.append(current_path + '/' +  file)
        
        for ending in VALID_FILE_ENDINGS:
            if ending in file:
                files_in_dir.append(current_path + '/' + file)
                break

    all_files += files_in_dir
    for directory in directories:
        if not '.git' in directory:
            get_all_paths(directory, all_files)

def trim_file_path(file_path: str) -> str:
    assert file_path[0:2] == './', 'file path must start with "./"'
    idx = len(file_path) - 1

    while file_path[idx] != '/':
        idx -= 1
    
    return file_path[idx + 1:]

def main():
    current_dir_path = '.'
    all_text = ''
    all_files = []
    get_all_paths(current_dir_path, all_files)

    print()
    print('-'*20 + 'FOUND A TOTAL OF', len(all_files), 'FILES' + '-'*20)

    for file in all_files:
        if '.html' in file or '.css' in file or '.js' in file:
            with open(file, 'r') as file:
                all_text += file.read()

    unused_files = []
    for file in all_files:
        file_name = trim_file_path(file)
        if not file_name in all_text:
            unused_files.append(file)

    print('\nused files ->', len(all_files) - len(unused_files))
    print('unused files ->', len(unused_files))
    print()
    print('-'*26 + 'UNUSED FILES' + '-'*26)
    print()
    for file in unused_files:
        print(file)
    print()

if __name__ == '__main__':
    main()
