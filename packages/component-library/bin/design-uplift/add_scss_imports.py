import sys
import os
from import_mapping import import_mapping as murmur_import_mapping


class AutoImporter:
    @staticmethod
    def add_imports(import_mapping, file_contents):
        changed = False
        for (import_path, strings) in import_mapping.items():
            if AutoImporter._contains_reference(strings, file_contents):
                if import_path not in file_contents:
                    file_contents = AutoImporter._add_import_to_top_of_file(
                        file_contents, import_path
                    )
                    changed = True
        return file_contents, changed

    @staticmethod
    def get_all_scss_file_paths():
        paths = []
        for root, directories, filenames in os.walk("."):
            for filename in filenames:
                path = os.path.join(root, filename)
                if AutoImporter.is_scss_file(path):
                    paths.append(path)
        return paths

    @staticmethod
    def update_file(path):
        f = open(path, "r")
        contents = f.read()
        new_contents, changed = AutoImporter.add_imports(murmur_import_mapping, contents)
        if changed:
            f.close()
            f = open(path, "w")
            print(f": {path}")
            f.write(new_contents)
        else:
            print(f"unchanged: {path}")
        f.close()

    @staticmethod
    def is_scss_file(path):
        _, ext = os.path.splitext(path)
        return ext == ".scss"

    @staticmethod
    def _contains_reference(strings, file_contents):
        return any(filter(lambda string: string in file_contents, strings))

    @staticmethod
    def _add_import_to_top_of_file(file_contents, path):
        import_statement = f'@import "{path}";'
        return f"{import_statement}\n{file_contents}"


def main(argv):
    for path in AutoImporter.get_all_scss_file_paths():
        AutoImporter.update_file(path)


if __name__ == "__main__":
    main(sys.argv)
